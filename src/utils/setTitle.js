let routeTitle = "";
let storeTitle = "";

function setBlogTitle() {
    if (!routeTitle || !storeTitle) {
        document.title = "Loading...";
    } else if (routeTitle && !storeTitle) {
        document.title = routeTitle;
    } else if (!routeTitle && storeTitle) {
        document.title = storeTitle;
    } else {
        document.title = `${routeTitle}-${storeTitle}`;
    }
}

export default {
    setRouteTitle(title) {
        routeTitle = title;
        setBlogTitle()
    },
    setStoreTitle(title) {
        storeTitle = title;
        setBlogTitle()
    }
}