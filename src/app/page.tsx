import { Grid, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
	return (
		<Grid alignContent={'start'} justifyContent={'center'}>
			<Text textAlign={'center'} fontSize={'2xl'}>
				ページ一覧
			</Text>
			<UnorderedList mt={26} p={0}>
				<ListItem>
					<Link href={{ pathname: '/next-router', query: { index: '0' } }}>
						<Text fontSize={'xl'} color={'blue'} _hover={{ textDecoration: 'underline' }}>
							next router
						</Text>
					</Link>
				</ListItem>
				<ListItem>
					<Link href={{ pathname: '/nuqs', query: { index: '0' } }}>
						<Text fontSize={'xl'} color={'blue'} _hover={{ textDecoration: 'underline' }}>
							nuqs
						</Text>
					</Link>
				</ListItem>
			</UnorderedList>
		</Grid>
	);
}
