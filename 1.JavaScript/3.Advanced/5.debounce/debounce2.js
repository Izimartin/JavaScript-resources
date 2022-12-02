document.getElementById('filterText')
    .addEventListener('input', debounce(e => filterPosts(e.target.value), 250));