import RNFetchBlob from 'rn-fetch-blob';
import {unzip} from 'react-native-zip-archive';
import RNFS from 'react-native-fs';
import {useEffect, useState} from 'react';
import {Platform} from 'react-native';

async function copyRecursive(source: string, destination: string) {
  const items = await RNFS.readDir(source);
  await RNFS.mkdir(destination);
  for (const item of items) {
    if (item.isFile() === true) {
      const destinationFile = destination + '/' + item.name;
      await RNFS.copyFile(item.path, destinationFile);
    } else {
      const subDirectory = source + '/' + item.name;
      const subDestinationDirectory = destination + '/' + item.name;
      await copyRecursive(subDirectory, subDestinationDirectory);
    }
  }
}
export const useDownloadModule = ({moduleList}) => {
  const [process, setProcess] = useState('');
  const [enable, setEnabled] = useState(false);
  async function downloadSource() {
    const dirs = RNFetchBlob.fs.dirs;
    moduleList?.map(async (item, index) => {
      const path = RNFS.DocumentDirectoryPath + `/${item.name}/`;
      const downloaded = await RNFS.exists(path);
      if (!downloaded) {
        if (Platform.OS === 'android') {
          await RNFS.copyFileAssets(
            'sdkWebapp3-main.zip',
            RNFS.DocumentDirectoryPath + '/sdkWebapp3-main.zip',
          );
        } else {
          await RNFS.copyFile(
            RNFS.MainBundlePath + '/sdkWebapp3-main.zip',
            RNFS.DocumentDirectoryPath + '/sdkWebapp3-main.zip',
          );
        }
        unzip(
          RNFS.DocumentDirectoryPath + '/sdkWebapp3-main.zip',
          RNFS.DocumentDirectoryPath + '/',
        )
          .then(async () => {
            await RNFS.unlink(
              RNFS.DocumentDirectoryPath + '/sdkWebapp3-main.zip',
            );
            setEnabled(true);
          })
          .catch(err => {});
        return;
      }
      setEnabled(true);
      // RNFetchBlob.config({
      //   path: dirs.DocumentDir + `/module${index}.zip`,
      // })
      //   .fetch('GET', item?.link)
      //   .progress((received, total) => setProcess(`${received}/${total}`))
      //   .then(res => {
      //     const rawPath = res.path();
      //     console.log('==rawPath', rawPath);
      //     unzip(rawPath, RNFS.DocumentDirectoryPath + '/')
      //       .then(async path => {
      //         let exists = await RNFS.exists(rawPath);
      //         if (exists) {
      //           await RNFS.unlink(rawPath);
      //           console.log('File Deleted');
      //         } else {
      //           console.log('File Not Available');
      //         }
      //         const checkRoute = await RNFS.exists(
      //           RNFS.DocumentDirectoryPath + `/${item.name}/staticSDK`,
      //         );
      //         if (!checkRoute) {
      //           await RNFS.unlink(
      //             RNFS.DocumentDirectoryPath + `/${item.name}/staticSDK`,
      //           );
      //           await RNFS.mkdir(
      //             RNFS.DocumentDirectoryPath + `/${item.name}/staticSDK`,
      //           );
      //           await RNFS.copyFile(
      //             RNFS.DocumentDirectoryPath + `/${item.name}/index.html`,
      //             RNFS.DocumentDirectoryPath +
      //               `/${item.name}/staticSDK/index.html`,
      //           );
      //         }
      //         setEnabled(true);
      //       })
      //       .catch(err => {});
      //   });
    });
  }

  useEffect(() => {
    downloadSource();
  }, []);

  return [process, enable];
};
