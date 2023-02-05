import { arrayOf, number, oneOfType, shape, string } from 'prop-types'
import addressType from './addressType'
import imageType from './imageType'

const cardType = shape({
    _id: string,
    title: string.isRequired,
    subtitle: string.isRequired,
    description: string.isRequired,
    phone: string.isRequired,
    email: string.isRequired,
    web: oneOfType([string]).isRequired,
    image: imageType.isRequired,
    address: addressType.isRequired,
    bizNumber: number.isRequired,
    createdAt: string.isRequired,
    user_id: string.isRequired,
    likes: arrayOf(string).isRequired
});

export default cardType