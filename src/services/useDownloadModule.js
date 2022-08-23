import RNFetchBlob from 'rn-fetch-blob';
import {unzip} from 'react-native-zip-archive';
import RNFS from 'react-native-fs';
import {useEffect, useState} from 'react';

export const useDownloadModule = ({moduleList}) => {
  const [process, setProcess] = useState('');
  const [enable, setEnabled] = useState(false);
  async function downloadSource() {
    const dirs = RNFetchBlob.fs.dirs;
    moduleList?.map((item, index) => {
      RNFetchBlob.config({
        path: dirs.DocumentDir + `/module${index}.zip`,
      })
        .fetch('GET', item?.link)
        .progress((received, total) => setProcess(`${received}/${total}`))
        .then(res => {
          const rawPath = res.path();
          console.log('==rawPath', rawPath);
          unzip(rawPath, RNFS.DocumentDirectoryPath + '/')
            .then(async path => {
              let exists = await RNFS.exists(rawPath);
              if (exists) {
                await RNFS.unlink(rawPath);
                console.log('File Deleted');
              } else {
                console.log('File Not Available');
              }
              const checkRoute = await RNFS.exists(
                RNFS.DocumentDirectoryPath + `/${item.name}/getDataWithAction`,
              );
              if (!checkRoute) {
                await RNFS.mkdir(
                  RNFS.DocumentDirectoryPath +
                    `/${item.name}/getDataWithAction`,
                );
                await RNFS.copyFile(
                  RNFS.DocumentDirectoryPath + `/${item.name}/index.html`,
                  RNFS.DocumentDirectoryPath +
                    `/${item.name}/getDataWithAction/index.html`,
                );
              }
              setEnabled(true);
            })
            .catch(err => {});
        });
    });
  }

  useEffect(() => {
    downloadSource();
  }, []);

  return [process, enable];
};
