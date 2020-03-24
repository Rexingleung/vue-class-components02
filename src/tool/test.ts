// 实例方法 
interface People {
    name: string
    age: number
    getName(): string
    getAge(): number
}
interface People_Static {
    new(name: string, age: number): People
    /** 静态方法 */
    staticA(): number

    (w: number): number
}
declare  var People: People_Static;