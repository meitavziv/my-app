def calc(weight, height, age, training, gender):
    if (gender =='women'):
        num = -161
    else:
        num = 5
    calories = (10 * weight) + (6.25 * height) - (5 * age) + num
    if (training == 2):
        calories = calories * 1.375
    elif (training == 3):
        calories = calories * 1.4
    elif (training == 4):
        calories = calories * 1.425
    elif (training == 5):
        calories = calories * 1.55
    elif (training == 6):
        calories = calories * 1.75
    return calories