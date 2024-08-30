const STORAGE_KEY = 'todoProjects';

const localStorageManager = {
    saveProjects: function (highPriority, midPriority, lowPriority) {
        const data = {
            high: highPriority,
            mid: midPriority,
            low: lowPriority
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },

    loadProjects: function () {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            const parsedData = JSON.parse(data);
            return {
                high: parsedData.high || [],
                mid: parsedData.mid || [],
                low: parsedData.low || []
            };
        }
        return { high: [], mid: [], low: [] };
    },

    clearProjects: function () {
        localStorage.removeItem(STORAGE_KEY);
    }
};

export default localStorageManager;