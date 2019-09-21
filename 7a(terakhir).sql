select n.name, w.name, s.salary FROM name n join work w on n.id_work = w.id join category s on n.id_salary = s.id
