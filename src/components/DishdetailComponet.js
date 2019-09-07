import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';




function RenderDish({ selDish }) {
    return (
        <Card>
            <CardImg width="100%" top src={selDish.image} alt={selDish.name} />
            <CardBody>
                <CardTitle>{selDish.name}</CardTitle>
                <CardText>{selDish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComment({ comments }) {
    const commentlist = comments.map((comment) => {
        return (
            <li key={comment.id} >
                {comment.comment}<br /><br />
                -- {comment.author} , {new Intl.DateTimeFormat('en-Us', { year: 'numeric', month: 'short', day: '2-digit' })
                    .format(new Date(Date.parse(comment.date)))}
                <br /><br />
            </li>
        );
    });

    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {commentlist}
            </ul>
        </div>

    );

}

const Dish = (props) => {

    if (props.selDish) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish selDish={props.selDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComment comments={props.selDish.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );

    }
}



export default Dish;