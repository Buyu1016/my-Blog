export default function(dataOptions = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: dataOptions
            }
        },
        async created() {
            this.data = await this.getAwaitData();
            this.isLoading = false;
        }
    }
}