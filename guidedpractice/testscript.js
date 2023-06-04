async function init() {
    const fetchAllSongs = async () => {
        try {
            const response = await fetch('https://fsa-async-await.herokuapp.com/api/guided-practice/songs');
            const data await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}
init();
