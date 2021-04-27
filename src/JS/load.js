function loadScript(url, callback) {
    if (url.isArray()) {
        url.array.forEach(item => {
            const testIfExist = document.querySelectorAll(item);
            if (testIfExist) {
                console.log(`${item} is already loaded`);
            }else {
            const element = document.createElement("script");
            element.type = "text/javascript";
            element.src = item;
            element.onload = callback;
            document.body.appendChild(element);
            }
        });

    } else {
        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url;
        element.onload = callback;

        document.body.appendChild(element);
        }
    
}