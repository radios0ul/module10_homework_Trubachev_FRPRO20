var myNum = prompt("enter value");

var changedNum = (+myNum);

 if (isNaN(changedNum) === false) 
    {
      if (changedNum === 0) 
         {
           console.log('Это ж ноль!')
         }
      else
          {      
            if ((changedNum - Math.trunc(changedNum)) != 0 )
                {
                  console.log('Это ж дробь!')
                }
            else {
              if ((changedNum % 2) === 0) 
                 {
                   console.log('четное')}
              else 
              {
                console.log('нечетное')
              }
            }
          }
        }
else 
{console.log('Упс, кажется, вы ошиблись')}