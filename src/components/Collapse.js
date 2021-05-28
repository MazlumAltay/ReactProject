// İlk constructor çalışıyor --> State initialization.
// render metodu ilk defa çalıştı.
// onClick eventi çalıştı.
// setState state nesnesi güncelledi --> triggered render.
// render metodu güncel JSX'i sayfada gösteriyor.
// Props'lar Component'ler arası veri iletişimini yapıyor.
// This mevcut Classımızdan türüyen objeyi bize gösterir.

import React from 'react';

class Collapse extends React.Component {

    state = {showContent: false}  //O an ki durumuna göre bilgi veriyor..! 
    

    showMore = () => {
        this.setState({showContent: !this.state.showContent}) // Bu Kısımda ise ShowContent ile State'in tam tersini yapması sağlandı..!
    }

    

    render() { //Render metodu olmazsa olmazımıdır..!
        return ( // Onclick ShowMore ile click özelliği verildi..!
            <div> 
                <button className="btn btn-primary w-100" onClick={this.showMore}> 
                    {React.children.map(this.props.children, children => children.props.cardTitle)}
                </button>

                {
                    this.state.showContent ? ( // Componentleri çalıştır..!
                        <div className="collapse show" >
                            {React.children.map(this.props.children, children => children)}
                        </div>
                    ) : null
                }
            </div>
        );
    };
};

export default Collapse;

