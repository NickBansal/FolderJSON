export const nameSort = (a, b) => {
    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
}

export const dateSort = (a, b) => {
    const dateA = a.added ? a.added : a.name, dateB = b.added ? b.added : b.name
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
}

export const sizeSort = (a, b) => a.size - b.size


