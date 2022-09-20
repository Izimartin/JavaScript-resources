export function filterItems(query, dataset) {
    if (query === '') {
        return items;
    }
    return items.filter((item) => item.title.indexOf(query) === 0);
}
