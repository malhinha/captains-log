const React = require('react');

class DefaultLayout extends React.Component {
   render() {
     return(
      <html lang="en" dir="ltr">
        <head>
          {/* charset needs to be Camel Cased in JSX */}
          <meta charSet="utf-8" />
          {/* This let's us dynamically create the title */}
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <div id="body-container">
            <div id="body-content">
              <div class="frame" id="index-top">
                <div class="spacer blue left"></div>
                <h1 class="frame-title">{this.props.title}</h1>
                <div class="spacer blue corner-top-right"></div>
              </div>
              <div class="outer-panel">
                <div class="inner-panel">
              {/* This is the start where the page content will be interjected  */}

              {this.props.children}

              {/* This is the end where the page content will be interjected  */}
                </div>
              </div>
              <div class="frame" id="index-bottom">
                <div class="spacer blue-lite left"></div>
                <div class="spacer yellow"></div>
                <div class="spacer blue corner-bottom-right"></div>
              </div>
            </div>
          </div>
        </body>
      </html>
     )
   };
};

module.exports = DefaultLayout;
