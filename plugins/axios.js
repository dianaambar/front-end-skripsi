import { state } from "../store/validation"

export default function({ $axios, store}) {
	$axios.onError(error => {
		if (error.response.status === 422){
			state.dispatch('validation/setErrors', error.response.data.errors);
		}
		return Promise.reject(error);
	});

	$axios.onRequest(() => {
		store.dispatch('validation/clearErrors')
	})
}