import {useEffect, useState} from 'react';
import StaticServer from 'react-native-static-server';
import RNFS from 'react-native-fs';
import {Platform} from 'react-native';

const useStaticServer = ({moduleName}) => {
  const [url, setUrl] = useState(null);
  const [server, setServer] = useState(null);

  function getPath() {
    return Platform.OS === 'android'
      ? RNFS.DocumentDirectoryPath + '/www'
      : RNFS.MainBundlePath + '/www';
  }

  useEffect(() => {
    if (!server) {
      const startServer = async () => {
        // const path = RNFS.DocumentDirectoryPath + `/${moduleName}`;
        const path = getPath();
        console.log('DEBUG_USE_STATIC_SERVER: ', path);
        const _server = new StaticServer(0, path, {
          localOnly: true,
          keepAlive: true,
        });
        _server.start().then(_url => {
          console.log('===start');
          setUrl(_url);
        });
        setServer(_server);
      };
      startServer();
    }

    return () => {
      if (server && server.isRunning()) {
        server.stop();
      }
    };
  }, [moduleName, server]);

  return [url, server];
};

export default useStaticServer;
