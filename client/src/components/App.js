import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => <h2>Landing</h2>;
const AboutSection = () => <h2>About</h2>;
const WorkSection = () => <h2>WorkSection</h2>;
const WorkList = () => <h2>WorkList</h2>;
const WorkItem = () => <h2>WorkItem</h2>;

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component="{ WorkItem }" />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;