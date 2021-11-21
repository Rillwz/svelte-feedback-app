<script>
	import FeedbackForm from './components/FeedbackForm.svelte'
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte'

	let feedback = []

	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id !=itemId)
	}

</script>

<main class="container">
	<FeedbackForm/>
	<FeedbackStats/>
	<FeedbackList/>
</main>