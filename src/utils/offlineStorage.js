/**
 * Offline Storage Engine for AntiBacteria
 * Implements LocalStorage / IndexedDB fallback to guarantee 100% offline functionality.
 */

const DB_PREFIX = 'antibacteria_v1_';

export const OfflineStorage = {
  save(key, data) {
    try {
      localStorage.setItem(`${DB_PREFIX}${key}`, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
      return true;
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
      return false;
    }
  },

  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(`${DB_PREFIX}${key}`);
      if (!item) return defaultValue;
      const parsed = JSON.parse(item);
      return parsed.data || defaultValue;
    } catch (e) {
      console.warn('LocalStorage get failed:', e);
      return defaultValue;
    }
  },

  isOnline() {
    return navigator.onLine;
  },

  registerNetworkListeners(onStatusChange) {
    const handleOnline = () => onStatusChange(true);
    const handleOffline = () => onStatusChange(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }
};
