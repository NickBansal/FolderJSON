import moment from 'moment'

export const nameSort = (a, b) => {
    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
}

export const dateSort = (a, b) => {
    const dateA = moment(a.added).format('MMMM Do YYYY, h:mm:ss a'), dateB = moment(b.added).format('MMMM Do YYYY, h:mm:ss a')
    return dateA < dateB ? -1 : dateA > dateB ? 1 : 0
}

export const sizeSort = (a, b) => a.size - b.size


