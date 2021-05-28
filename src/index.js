import React from 'react';
import ReactDOM from 'react-dom'

import Card from './components/Card';
import Collapse from './components/Collapse';

//JSX Javascripte bir söz dizimi ekleme..!
//JSX için perent elemanını kullanmak için bir div içinde yazım yapmalıyız..!
//State Companentin özelliklerini taşıyan JavaScript nesnesi..! 

//<button type="button" style="padding: 10px; color: white; background-color: red; border: 2px solid yellow;">HTML BUTTON</button>

const App = () => {

    return (
        <div className="container">

            <div className="row">

                <div className="card-group w-100">

                    <div className="col">

                        <Collapse href="collapseExample">
                            <Card
                                cardText="Lorem Ipsum Text I"
                                updatedTime="Last Update 1 min ago"
                                image="https://picsum.photos/id/1/200/300"
                            />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card
                                cardTitle="Card Title II"
                                cardText="Lorem Ipsum Text II"
                                updatedTime="Last Update 2 min ago"
                                image="https://picsum.photos/id/10/200/300"
                            />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample3">
                            <Card
                                cardTitle="Card Title III"
                                cardText="Lorem Ipsum Text III"
                                updatedTime="Last Update 3 min ago"
                                image="https://picsum.photos/id/100/200/300"
                            />
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);

