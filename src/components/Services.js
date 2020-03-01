import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail />,
                title: "Free Cocktails",
                info: 'A cocktail is a mixed drink typically made with a distilled liquor as its base ingredient that is then mixed with other ingredients or garnishments.'
            },
            {
                icon:<FaHiking />,
                title: "Endless Hiking",
                info: 'A cocktail is a mixed drink typically made with a distilled liquor as its base ingredient that is then mixed with other ingredients or garnishments.'
            },
            {
                icon:<FaShuttleVan />,
                title: "Free Shuttle Van",
                info: 'A cocktail is a mixed drink typically made with a distilled liquor as its base ingredient that is then mixed with other ingredients or garnishments.'
            },
            {
                icon:<FaBeer />,
                title: "Strongest Beers",
                info: 'A cocktail is a mixed drink typically made with a distilled liquor as its base ingredient that is then mixed with other ingredients or garnishments.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services" />
               <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        )
                    })}
               </div>
            </section>
        )
    }
}
