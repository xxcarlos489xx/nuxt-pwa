import createPersistedState from 'vuex-persistedstate'
import SecureLS from "secure-ls";
const ls = new SecureLS({
  isCompression: false,
  encodingType: 'aes',
  encryptionSecret: 's3cr3t$@1_S1/#0S1'
});

export default ({store}) => {
  //if(process.client){    
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })(store);
  //}
}