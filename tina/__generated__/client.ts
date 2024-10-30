import { createClient } from 'tinacms/dist/client'
import { queries } from './types'
export const client = createClient({
	url: 'http://localhost:4001/graphql',
	token: '5991485a34c8015f633f375810e765f58784ee03',
	queries
})
export default client
