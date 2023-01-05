import * as storage from 'firebase/storage';

const storages = storage.getStorage();

const getStorageRef = resultFile => {
  return storage.ref(storages, 'users_images/' + resultFile);
};
const getPathReference = resultFile => {
  return storage.ref(
    storages,
    'gs://fir-test-f9901.appspot.com/users_images/' + resultFile
  );
};

const onUploadString = async (storageRef, base64data) => {
  try {
    await storage.uploadString(storageRef, base64data, 'data_url');
  } catch (e) {
    console.log(e);
  }
};
const getUrl = async pathReference => {
  try {
    return await storage.getDownloadURL(pathReference);
  } catch (e) {
    console.log(e);
  }
};

export { getStorageRef, getPathReference, onUploadString, getUrl };
