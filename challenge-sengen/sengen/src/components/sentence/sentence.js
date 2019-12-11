import React, { Component } from 'react';
import WordRandomise from '../word-randomise/word-randomise';
import Word from '../word/word';
import './sentence.css';


class Sentence extends Component {
    state = { 
        connector:['The'],
        noun: ['Car', 'Tree', 'House', 'Athlete', 'Grandma', 'French'], 
        adjective:['Ablaze','Distinct','Quirky','Adorable','Drab','Ruddy','Alluring','Dull','Shiny','Attractive','Elegant','Skinny','Average','Embarrassed','Sloppy','Awkward','Fancy','Smiling','Balanced','Fat','Sparkling','Beautiful','Filthy','Spotless','Blonde','Glamorous','Strange','Bloody','Gleaming','Tacky'], 
        verb:['Sped by', 'Jumped', 'Fought', 'Ran', 'Flew over', 'Danced'],
        punctuation:['.'] 
     };
    
     //Regenerate Needs to be rendered in Sentence not  Word. Index should be intialised in Sentence so randomising index in sentence will update word-randomise. 

    render() { 
        const { connector, noun, adjective, verb, punctuation } = this.state;
        return ( 
            <>
                <main>
                    <Word word={connector}/>
                    <WordRandomise words={adjective} />
                    <WordRandomise words={noun} />
                    <WordRandomise words={verb} />
                    <Word word={connector}/>
                    <WordRandomise words={adjective} />
                    <WordRandomise words={noun} />
                    <Word word={punctuation} />
                </main>
            </>
         );
    }
}
 
export default Sentence;

