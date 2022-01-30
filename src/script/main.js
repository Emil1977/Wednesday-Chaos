function add(a, b) {
    return a + b;
}

(function () {
    var round = document.getElementById("round");
    var text = round.textContent;
    round.innerHTML = "";
    var radius = round.offsetWidth / 2;

    var textNodes = text.replace(/\s/, " ").split("").map(function (char) {
        var charNode = document.createElement("span");
        charNode.className = "char";
        charNode.appendChild(document.createTextNode(char === " " ? "\xA0" : char));
        return charNode;
    });
    textNodes.forEach(function (node) {
        round.appendChild(node);
    });
    var textWidth = textNodes.reduce(function (width, node) {
        return width + node.offsetWidth;
    }, 0);
    var textHeight = textNodes.reduce(function (height, node) {
        return Math.max(height, node.offsetHeight);
    }, 0);
    var unit = "px";
    var fontSize = textNodes.reduce(function (fontSize, node) {
        var font = window.getComputedStyle(node).fontSize;
        unit = font.replace(/\d+/g, "");
        return Math.max(fontSize, parseInt(font, 10));
    }, 0);

    while (fontSize > 0 && textWidth > 2 * Math.PI * (radius - textHeight)) {
        fontSize -= 0.1;
        textNodes.forEach(function (node) {
            node.style.fontSize = fontSize + unit;
        });
        var textWidth = textNodes.reduce(function (width, node) {
            return width + node.offsetWidth;
        }, 0);
        var textHeight = textNodes.reduce(function (height, node) {
            return Math.max(height, node.offsetHeight);
        }, 0);
    }

    var angleRange = textWidth / (radius - textHeight);
    var xBend = 0;

    textNodes.forEach(function (node) {
        xBend += node.offsetWidth / 2;
        var angle = -(Math.PI + angleRange * (-1 + 2 * xBend / textWidth) / 2);
        node.style.transform = "rotate(" + (180 - angle * 180 / Math.PI) + "deg)";
        node.style.top = (radius * (1 + Math.cos(angle))) + "px";
        node.style.left = (radius * (1 + Math.sin(angle)) - node.offsetWidth / 2) + "px";
        xBend += node.offsetWidth / 2;
    });
}());