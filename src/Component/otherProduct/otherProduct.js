import './otherProduct.css';
import Privacy from '../../Assets/Privacy_policy.png';
import Terms from '../../Assets/Term&Condition.png';
import Domain from '../../Assets/Domain_Generator.png';
import Invoice from '../../Assets/Invoice_Generator.png';

const Otherproduct = () => {
    return (
        <div className="otherproduct">
            <div className="otherproduct_head">
                Try out other free products
            </div>

            <div className="other_product">
                <div className="other_product_each">
                    <img className="other_product_privacy" src={Privacy} alt="Privacy Policy Generator" />
                    <div className="other_product_head">
                        Privacy Policy Generator
                    </div>
                    <div className="other_product_description">
                        Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                    </div>
                </div>
                <div className="other_product_each">
                    <img className="other_product_privacy" src={Terms} alt="Privacy Policy Generator" />
                    <div className="other_product_head">
                    Terms & Conditions Generator
                    </div>
                    <div className="other_product_description">
                    Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.    
                    </div>
                </div>
                <div className="other_product_each">
                    <img className="other_product_privacy" src={Domain} alt="Privacy Policy Generator" />
                    <div className="other_product_head">
                        Domain Name Generator
                    </div>
                    <div className="other_product_description">
                    Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                    </div>
                </div>
                <div className="other_product_each">
                    <img className="other_product_privacy" src={Invoice} alt="Privacy Policy Generator" />
                    <div className="other_product_head">
                        Invoice Generator
                    </div>
                    <div className="other_product_description">
                        Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otherproduct;