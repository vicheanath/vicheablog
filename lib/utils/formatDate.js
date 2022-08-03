import siteMetadata from '@/data/siteMetadata'
import moment from 'moment'

const formatDate = (date) => moment(date).locale('km').format('LLL')

export default formatDate
