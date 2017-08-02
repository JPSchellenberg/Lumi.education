export interface Newsletter {
	newsletter_subscription_status: 'init' | 'pending' | 'success' | 'error';
	email_address: string;
	popup_dismissed: boolean;
}

export interface State {
	newsletter: Newsletter;
}