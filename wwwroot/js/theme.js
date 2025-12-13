(function () {
    const storageKey = 'ft-theme';

    function getSystemTheme() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function getTheme() {
        const saved = localStorage.getItem(storageKey);
        if (saved === 'light' || saved === 'dark') {
            return saved;
        }
        return getSystemTheme();
    }

    function setTheme(theme) {
        const next = theme === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', next);
        localStorage.setItem(storageKey, next);
        return next;
    }

    function toggleTheme() {
        const current = getTheme();
        const next = current === 'dark' ? 'light' : 'dark';
        return setTheme(next);
    }

    window.ftTheme = {
        get: getTheme,
        set: setTheme,
        toggle: toggleTheme
    };
})();
