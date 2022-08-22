import RNFetchBlob from 'rn-fetch-blob';
import {unzip} from 'react-native-zip-archive';
import RNFS from 'react-native-fs';
import {useEffect} from 'react';

export const useDownloadModule = ({moduleList}) => {
  async function downloadSource() {
    const dirs = RNFetchBlob.fs.dirs;
    moduleList?.map((item, index) => {
      RNFetchBlob.config({
        path: dirs.DocumentDir + `/module${index}.zip`,
      })
        .fetch('GET', item?.link)
        .progress((received, total) => {})
        .then(res => {
          const rawPath = res.path();
          unzip(rawPath, RNFS.DocumentDirectoryPath + '/')
            .then(async path => {
              let exists = await RNFS.exists(rawPath);
              if (exists) {
                await RNFS.unlink(rawPath);
                console.log('File Deleted');
              } else {
                console.log('File Not Available');
              }
            })
            .catch(err => {});
        });
    });
  }

  useEffect(() => {
    downloadSource();
  }, []);
};
