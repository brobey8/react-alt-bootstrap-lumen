var React = require('react');
var Link = require('react-router').Link;

var MainContent = React.createClass({

    render() {

        return(
        <div className="container main-content">
        <br/>
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1 className="page-header ">
                 <strong>Hardware</strong> + <strong>Software</strong> to help track your inventory
                </h1>
            <br/>
            </div>
        


            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4><i className="fa fa-fw fa-thumbs-o-up"></i>Simple - Everything you need.</h4>
                    </div>
                    <div className="panel-body">
                        <p> Its <strong>really easy</strong> to get started with remote tracking, you simply install your BOX into a vehicle and start tracking. You can access details through our Map tab which have been targeted at fleet tracking.</p>
                        <p> If you need to expand, its as simple as purchasing another tracking <strong>BOX</strong> and installing.</p>
                        <br/>
                        <br/>

                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4><i className="fa fa-fw fa-cog"></i>Always Accessible - Applications.</h4>
                    </div>
                    <div className="panel-body">
                        <p>Our custom made application will ensure you have access to your <strong>BOX's</strong> from anywhere at anytime.</p>
                        <p>You can see lists of your <strong>BOX's</strong> and view real-time information on each BOX or even look back on previous routes. </p>
                        <br/>
                        <br/>
                        <br/> 
                   </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4><i className="fa fa-fw fa-lightbulb-o"></i>Extensible - API's and Engineers.</h4>
                    </div>
                    <div className="panel-body">
                        <p>We provide the starting point for many businesses to get online and tracking. For the most part you won't need anything else but we are here to <strong>help</strong> or <strong>customise</strong> your <strong>application</strong>.</p>
                        <p>The guy's behind pin<strong>trax</strong> are a talented group of software and hardware engineers so if the API or Base Applications don't get you where you need to be, we can step in and get you there.</p>

                    </div>
                </div>
            </div>
        </div>


        <br/>

      </div>
        )
    }
});

module.exports = MainContent;