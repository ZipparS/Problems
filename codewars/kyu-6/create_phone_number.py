def create_phone_number(n):
    prefix = ''.join([str(elem) for elem in n[:3]])
    postfix = ''.join([str(elem) for elem in n[3:]])

    return '(' + prefix + ') ' + postfix[:3] + '-' + postfix[3:]