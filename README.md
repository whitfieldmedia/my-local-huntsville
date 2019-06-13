This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br/>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br/>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br/>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br/>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


<!-- {this.state.done
? this.props.feed.items.map(item => (
<div key={item.id}>
<h1 className="event-title"> {item.title} </h1>
{/* <p> {this.getDate(item.isoDate)} </p> */}
{/* <div className="event-info" dangerouslySetInnerHTML={this.createMarkup(item.contentSnippet)} /> */}
<div className="event-info"> {ReactHtmlParser(item.content)} </div>
{/* <div className="event-info" dangerouslySetInnerHTML={this.createMarkup(item.content)} /> */}
</div>
))
: null} -->


<!-- {this.state.done
? 
<div className="event-holder">
{this.props.feed.items.map(item => (
<a className="event-wrapper" key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
<h1 className="event-title"> {item.title} </h1>
<Moment className="event-date" format="dddd MMMM DD, YYYY" date={item.isoDate} />
<div className="event-info" dangerouslySetInnerHTML={this.sendData(item.content)}/>
</a> 
))}
</div>
: null} -->


<!-- <Moment className="event-date" format="dddd MMMM DD, YYYY" date={data.start} /> -->


// componentDidMount() {
//     this.props.getFeed();
// }

// componentDidUpdate() {
//     if(this.props.feed.items && !this.state.done) {
//         this.setState({
//             done: true
//         })
//     }
// }





<!-- <a className="weatherwidget-io" href="https://forecast7.com/en/34d73n86d59/huntsville/?unit=us" data-label_1="HUNTSVILLE" data-label_2="WEATHER" data-theme="original" >HUNTSVILLE WEATHER</a> -->



    // getEvents = () => {
    //     let phq = new Client({access_token:"nfFqp6j6LbGNRQw4Zp1NM8wp8U3dVc"})
    //     let now = new Date();
    //     let date = moment(now).format('YYYY-MM-DD')
    //     phq.events.search({within:'50mi@34.729529,-86.586003', category:'concerts,festivals,performing-arts,sports,community,conferences,expos', country:'US', sort:'start', 'start.gte':`${date}`})
    //         .then((results) => {
    //             this.setState ({
    //                 data: results,
    //                 done: true
    //             })
    //         })
    // }

    // componentDidMount() {
    //     const t = (entry, tname) => entry.getElementsByTagName(tname)[0];
    //     const html2txt = html => html.replace(/<(?:.|\n)*?>/gm, '');
    //     const content = entry => html2txt(t(entry, 'content').textContent).slice(0,200);
    //     const image = html => html.replace("<![CDATA[", "");
    //     fetch(CORS_PROXY + 'https://www.trumba.com/calendars/ourvalleyevents.xml')
    //         .then(response => response.text())
    //         .then(xml => {
    //             const parser = new DOMParser();
    //             const xmlDoc = parser.parseFromString(xml, "text/xml");
    //             const html = Array.from(xmlDoc.getElementsByTagName('entry'))
    //             const data = html.join('');
    //             if(!this.state.data.includes(data)) {
    //                 this.setState({
    //                     data: data,
    //                     done: true
    //                 })
    //             }
    //         })
    // }