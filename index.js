import { formatDistanceToNow } from 'date-fns'

const date = '2014-07-24 10:00:00'

document.body.textContent = formatDistanceToNow(new Date(date)) + ` ago`