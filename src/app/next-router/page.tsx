'use client';

import { Button, Grid, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NextRouter() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const [index, setIndex] = useState(Number(searchParams.get('index')) || 0);

	useEffect(() => {
		setIndex(Number(searchParams.get('index')) || 0);
	}, [searchParams]);

	const onTabClick = (index: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('index', index.toString());
		router.push(`${pathname}?${params}`);
	};

	const onButtonClick = () => {
		router.push('/');
	};

	return (
		<Grid gridTemplateRows={'1fr auto'}>
			<Tabs index={index} size='md' variant='enclosed' borderColor={'blue.500'}>
				<TabList>
					<Tab onClick={() => onTabClick(0)}>Tab 0</Tab>
					<Tab onClick={() => onTabClick(1)}>Tab 1</Tab>
					<Tab onClick={() => onTabClick(2)}>Tab 2</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Text fontSize={'xl'}>たぶいち</Text>
					</TabPanel>
					<TabPanel>
						<Text fontSize={'xl'}>たぶに</Text>
					</TabPanel>
					<TabPanel>
						<Text fontSize={'xl'}>たぶさん</Text>
					</TabPanel>
				</TabPanels>
			</Tabs>
			<Button variant={'link'} onClick={onButtonClick}>
				TOPに戻る
			</Button>
		</Grid>
	);
}
