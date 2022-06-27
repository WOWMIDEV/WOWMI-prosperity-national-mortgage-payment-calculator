const htmlTemplateForm = () => {
    const calculatorWrp = document.getElementById('calculator-mortgage-payment');

    if (!calculatorWrp) {
        return false;
    }

    const html = `<div class="calc-wrp">
    <section class="calc-wrp__container">
        <div class="calc-wrp__form-block-wrapper">
            <div class="container">
                <div class="calculator">
                    <div class="calculator__fields">
                        <div class="form">
                            <form id="calculator" name="calc" class="form__wrapper" aria-label="Calculator">

                                <div class="form__layout">
        <!--                            Home price, $-->
                                    <div class="form__item">
                                        <label for="home-price" class="label">Home price, $</label>
                                        <input type="number"
                                               class="input w-input"
                                               maxlength="256"
                                               name="home-price"
                                               placeholder="250000"
                                               value="500000"
                                               id="home-price">
                                    </div>
        <!--                            Loan term, year-->
                                    <div class="form__item">
                                        <label class="label">Loan term, year</label>
                                        <div class="form__radiobuttons">
                                            <label class="radio" for="10">
                                                <input type="radio"
                                                       name="term"
                                                       id="10"
                                                       value="10">
                                                <div class="radio__icon"></div>
                                                <span class="radio__label w-form-label">10</span>
                                            </label>

                                            <label class="radio" for="15">
                                                <input type="radio"
                                                       name="term"
                                                       id="15"
                                                       value="15">
                                                <div class="radio__icon"></div>
                                                <span class="radio__label w-form-label">15</span>
                                            </label>

                                            <label class="radio" for="20">
                                                <input type="radio"
                                                       name="term"
                                                       id="20"
                                                       value="20">
                                                <div class="radio__icon"></div>
                                                <span class="radio__label w-form-label">20</span>
                                            </label>

                                            <label class="radio" for="30">
                                                <input type="radio"
                                                       name="term"
                                                       id="30"
                                                       value="30"
                                                       checked>
                                                <div class="radio__icon"></div>
                                                <span class="radio__label w-form-label">30</span>
                                            </label>
                                        </div>
                                    </div>
        <!--                            Down payment, $-->
                                    <div class="form__item condition-item">
                                        <label for="down-payment" class="label">Down payment, $</label>
                                        <input type="number"
                                               class="input w-input"
                                               maxlength="256"
                                               name="down-payment"
                                               placeholder="100000"
                                               value="100000"
                                               id="down-payment">
                                    </div>
        <!--                            Interest Rate, %-->
                                    <div class="form__item condition-item">
                                        <label for="interest-rate" class="label">Interest Rate, %</label>
                                        <input type="number"
                                               class="input w-input"
                                               name="interest-rate"
                                               id="interest-rate"
                                               step="0.1"
                                               min="0.5"
                                               value="3.50">
                                    </div>
        <!--                        Checkbox Include -->
                                    <div class="form__item">
                                        <label class="w-checkbox checkbox checkbox-inline" for="tax-switch">
                                            <input type="checkbox"
                                                   name="tax-switch"
                                                   id="tax-switch"
                                                   data-name="tax-switch"
                                                   data-calc-exclude="property-tax"
                                                   checked="checked">
                                            <div class="checkbox__icon"></div>
                                            <span class="checkbox__label">Include Taxes/Insurance</span>
                                        </label>
                                    </div>
        <!--                        Checkbox empty-->
                                    <div class="form__item"></div>
        <!--                        Home insurance (yearly), $-->
                                    <div class="form__item condition-item" data-property-tax>
                                        <label for="home-insurance" class="label">Home insurance (yearly), $</label>
                                        <input type="number"
                                               class="input w-input"
                                               name="home-insurance"
                                               id="home-insurance"
                                               value="1200">
                                    </div>
        <!--                        Property tax (yearly), $-->
                                    <div class="form__item condition-item" data-property-tax>
                                        <label for="property-tax" class="label">Property tax (yearly), $</label>
                                        <input type="number"
                                               class="input w-input"
                                               name="property-tax"
                                               placeholder="0"
                                               value="0"
                                               id="property-tax">
                                    </div>
        <!--                        Checkbox Include -->
                                    <div class="form__item">
                                        <label class="w-checkbox checkbox checkbox-inline" for="pmi-switch">
                                            <input type="checkbox"
                                                   name="pmi-switch"
                                                   class="swticher"
                                                   id="pmi-switch"
                                                   checked="checked"
                                                   data-calc-exclude="pmi-rate">
                                            <div class="checkbox__icon"></div>
                                            <span class="checkbox__label">Include PMI</span>
                                        </label>
                                    </div>
<!--                        Checkbox empty-->
                                    <div class="form__item"></div>
<!--                        PMI rate-->
                                    <div class="form__item" data-pmi-rate>
                                        <label for="pmi-rate" class="label">PMI rate</label>
                                        <input type="number"
                                               class="input w-input"
                                               name="pmi-rate"
                                               placeholder="0.001"
                                               step="0.001"
                                               value="0.005"
                                               id="pmi-rate">
                                    </div>
<!--                        HOA dues, $-->
                                    <div class="form__item">
                                        <label for="hoa-dues" class="label">HOA dues, $</label>
                                        <input type="number"
                                               class="input w-input"
                                               name="hoa-dues"
                                               placeholder="0"
                                               value="0"
                                               id="hoa-dues">
                                    </div>
                                </div>

                                <input type="submit" value="Calculate now" data-wait="Please wait..." class="btn calc-wrp__btn-calc">
                            </form>
                        </div>
                    </div>

                    <div class="calculator__graphics">
                        <div class="calculator__prices">
                            <div class="calculator__price">
                                <div class="calculator__price-label">Mortgage Amount, $</div>
                                <div class="calculator__price-number" data-calc-result="amount"> </div>
                            </div>
                            <div class="calculator__price">
                                <div class="calculator__price-label">Total Cost Of Mortgage, $</div>
                                <div class="calculator__price-number" data-calc-result="total"> </div>
                            </div>
                        </div>
                        <div class="chart__donut">

                            <div class="chart__text">
                                <div class="chart__description">Monthly payment:</div>
                                <div class="chart__price">
                                    <span data-calc-result="monthly"></span>
                                </div>
                            </div>

                            <div class="chart__donut-wrp">
                                <canvas id="donutBox" data-calc="donut" width="400" height="400"></canvas>
                            </div>

                            <div class="legend">
                                <div class="legend__item">
                                    <div class="legend__color" data-calc-legend-name="P&amp;I"></div>
                                    <div class="legend__text">P&amp;I</div>
                                </div>
                                <div class="legend__item">
                                    <div class="legend__color" data-calc-legend-name="Insurance"></div>
                                    <div class="legend__text">Insurance</div>
                                </div>
                                <div class="legend__item">
                                    <div class="legend__color" data-calc-legend-name="Taxes"></div>
                                    <div class="legend__text">Taxes</div>
                                </div>
                                <div class="legend__item">
                                    <div class="legend__color" data-calc-legend-name="PMI"></div>
                                    <div class="legend__text">PMI</div>
                                </div>
                                <div class="legend__item">
                                    <div class="legend__color" data-calc-legend-name="HOA"></div>
                                    <div class="legend__text">HOA</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>`;

    calculatorWrp.insertAdjacentHTML("afterbegin", html);

    return true;
};

export default htmlTemplateForm;