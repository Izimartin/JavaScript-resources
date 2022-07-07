function App(props) {
//Context share data without passing props
    return (
        <MoodContext.Provider value={moods.happy}>
            <MoodEmoji />
        </MoodContext.Provider>

    );

}
//Replacement for the consumer
function MoodEmoji() {
   return <MoodContext.Consumer>
    { ({mood}) => <p>{mood}</p> }
    </MoodContext.Consumer>


}