#!/bin/bash

arr=($(ls))

for name in ${arr[@]}
do
    aa=$(ls $name | cut -d '.' -f 1)
    [ $aa = 'a' ] && continue
    echo "$aa"
    mv $name $aa.png
done
