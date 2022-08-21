import {useEffect, useState} from 'react';
import StaticServer from 'react-native-static-server';
import RNFS from 'react-native-fs';

const useStaticServer = ({moduleName, suffix}) => {
  const [url, setUrl] = useState(null);
  const [server, setServer] = useState(null);

  useEffect(() => {
    if (!server) {
      const startServer = async () => {
        const path = RNFS.DocumentDirectoryPath + `/${moduleName}/`;
        console.log('DEBUG_USE_STATIC_SERVER: ', path);
        const _server = new StaticServer(0, path, {
          localOnly: true,
          keepAlive: true,
        });
        _server.start().then(_url => {
          if (suffix) {
            setUrl(`${_url}/${suffix}`);
          } else {
            setUrl(`${_url}`);
          }
          // setUrl(`${_url}`);
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
