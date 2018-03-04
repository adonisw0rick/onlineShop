// @flow
import React from 'react';
import { Tabs, Tab, Row, Col, ListGroup, ListGroupItem, Nav, NavItem, Glyphicon , MenuItem, NavDropdown} from 'react-bootstrap';
import styles from './About.scss';
import ProductList from '../../components/ProductList/ProductList';
import * as getProducts from '../../controllers/getProducts';
/* import Product from '../../components/Product/Product'; */


const Home = () => (
    <div className={styles.about}>
        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
            <Row className="clearfix">
                <Col sm={12}>
                    <Nav bsStyle="tabs">
                        <NavItem eventKey="first">Tablets</NavItem>
                        <NavItem eventKey="second">Cámaras Ebay</NavItem>
                        <NavItem eventKey="third">Relojes</NavItem>
                        <NavItem eventKey="fourth">Cámaras walmart</NavItem>
                        <NavItem eventKey="five">Relojes walmart</NavItem>
                        <NavItem eventKey="six">Tablets walmart</NavItem>
                    </Nav>
                </Col>
                <Col sm={12}>
                    <Tab.Content animation>
                        <Tab.Pane eventKey="first"><ProductList promise={getProducts.ebayPromise} cpu={getProducts.processProductEbay} category="tablets" /></Tab.Pane>
                        <Tab.Pane eventKey="second"><ProductList promise={getProducts.ebayPromise} cpu={getProducts.processProductEbay} category="cameras" /></Tab.Pane>
                        <Tab.Pane eventKey="third"><ProductList promise={getProducts.ebayPromise} cpu={getProducts.processProductEbay} category="watches" /></Tab.Pane>
                        <Tab.Pane eventKey="fourth"><ProductList promise={getProducts.walmartPromise} cpu={getProducts.processProductWalmart} category="cameras" /></Tab.Pane>
                        <Tab.Pane eventKey="five"><ProductList promise={getProducts.walmartPromise} cpu={getProducts.processProductWalmart} category="watches" /></Tab.Pane>
                        <Tab.Pane eventKey="six"><ProductList promise={getProducts.walmartPromise} cpu={getProducts.processProductWalmart} category="tablets" /></Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>;
        
        
        
    </div>
);

export default Home;