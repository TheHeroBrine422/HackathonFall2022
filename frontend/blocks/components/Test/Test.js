

const arr = [
    {
        a: 11,
        b: 22,
        c: '33',
    },
    {
        a: 111,
        b: 222,
        c: '333',
    },
    {
        a: 1111,
        b: 2222,
        c: '3333',
    },
];

export default function Test () {
    return (
      <div>
        {arr.map((num) => (
          <div key={num.a}>
              {num.c}
            </div>
        ))}
      </div>
    );
}