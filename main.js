window.onload = function () {
    var summaries = document.querySelectorAll('.thirdLayer summary');

    summaries.forEach(function (summary) {
        var rawText = summary.textContent.trim();
        var fileName = rawText.replace(/\s*\(.*?\)\s*$/, '');

        var filePath = 'https://celine10811020.github.io/Poems/Poems/' + encodeURIComponent(fileName) + '.txt';

        var xhr = new XMLHttpRequest();
        xhr.open('GET', filePath);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var forthLayer = summary.parentNode.querySelector('.forthLayer');
                forthLayer.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    });
};
