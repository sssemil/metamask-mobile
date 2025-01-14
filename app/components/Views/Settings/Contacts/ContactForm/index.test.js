import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './';
import configureMockStore from 'redux-mock-store';

describe('ContactForm', () => {
	const mockStore = configureMockStore();
	it('should render correctly', () => {
		const initialState = {
			engine: {
				backgroundState: {
					NetworkController: {
						network: '1',
					},
					AddressBookController: {
						addressBook: {
							'0x51239E13Fe029cD52asA8babEBafb6814bc8Ba4b': {
								address: '0x51239E13Fe029cD52asA8babEBafb6814bc8Ba4b',
								chainId: '1',
								isEns: false,
								memo: '',
								name: 'aa',
							},
						},
					},
					PreferencesController: {
						identities: {
							'0x51239E13Fe029cD52asA8babEBafb6814bc8Ba4b': {
								address: '0x51239E13Fe029cD52asA8babEBafb6814bc8Ba4b',
								name: 'Account 1',
							},
						},
					},
				},
			},
		};
		const wrapper = shallow(<ContactForm route={{ params: {} }} />, {
			context: { store: mockStore(initialState) },
		});
		expect(wrapper.dive()).toMatchSnapshot();
	});
});
