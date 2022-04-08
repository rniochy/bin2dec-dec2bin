import React from 'react';

const Calculatorbintodec = () => {
    return (
        <div>
                 <header>
                        <h1>Conversor</h1>
                        <h3> Binary number to Decimal number </h3>
                        <h3>  Decimal number to Binary number  </h3>
                 </header>
                <div>
                    <section>
                        <article>
                             <h3>Convert to Decimal</h3>
                             <input type="number" maxLength="8" placeholder='Type the  binary number'/>
                             <input type="text" readOnly/>
                             <input type="button" value="convert"/>
                        </article>

                    </section>
                </div>
                 <footer>

                 </footer>
        </div>
    );
}

export default Calculatorbintodec;
