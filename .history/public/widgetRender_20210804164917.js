db.collection('skærme').doc(skærm).collection('widgets')
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) =>{




        let kord = doc.id.split(',');

        let standard = {
            start: kord[0], 
            slutx:kord[1],
            sluty:kord[2]

        };
        switch (doc.data().widget) {
            case 'tekstboks':    
            tekstboks({...standard, align: 'center', tekst: doc.data().tekst, overskrift: doc.data().overskrift, farve: doc.data().farve, størrelse: doc.data().størrelse});
                break;

                case 'vejr':    
                    vejr({...standard, vistype: doc.data().vistype, BG: doc.data().BG, farve: doc.data().farve});
                break;

                case 'nedtælling':    
                nedtælling({...standard, 
                    tekst:doc.data().tekst, 
                    farve: doc.data().farve, 
                    størrelse:doc.data().størrelse, 
                    dato: doc.data().dato,
                    tid: doc.data().tid, 
                    id:doc.data().id,  
                    dage:doc.data().dage, 
                    timer:doc.data().timer, 
                    minutter:doc.data().minutter, 
                    sekunder:doc.data().sekunder, 
                    skrifttype:doc.data().skrifttype,
                    efter:doc.data().efter
                });
                break;

                case 'nyheder':    
                nyheder({...standard, 
                    kategori: doc.data().kategori, 
                    id: doc.data().id, 
                    farve: doc.data().farve, 
                    overskriftStørrelse: doc.data().overskriftStørrelse, 
                    beskrivelseStørrelse: doc.data().beskrivelseStørrelse,
                    antal: doc.data().antal
                });
                break;


                case 'dagens-vagter': 
                dagensvagt({...standard, 
                    farve: doc.data().farve, 
                    størrelse: doc.data().størrelse,
                    id: doc.data().id,
                    vagtTid: doc.data().vagtTid,
                    stillinger: doc.data().stillinger


                });
                break;

                case 'slideshow': 
                if(localion.pathname.includes('/rediger/'))
                slideshow({...standard,
                    slideshowParent: doc.data().slideshowParent,
                    id: doc.data().id,
                    
                })

                
        
            default:
                break;
        }



        });


});




