const fibonacci = (n, a=0, b=1) => new Array(n-1)
                                        .fill("hdeleon apesta")
                                        .reduce((ac) => {
                                            const temp = a;
                                            a = b;
                                            b = temp + b;
                                            ac.push(a);
                                            return ac;
                                        }, [0])
console.log(fibonacci(10));