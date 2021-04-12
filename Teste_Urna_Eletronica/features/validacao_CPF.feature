Feature: Validação CPF

  Scenario: Usuário digita CPF inválido e depois um válido
    Given Browse to web site "http://localhost:3000"
    And I press the "1" button
    And I press the "1" button
    And I press the "2" button
    And I press the "3" button
    And I press the "4" button
    And I press the "5" button
    And I press the "6" button
    And I press the "7" button
    And I press the "8" button
    And I press the "9" button
    And I press the "0" button
    And I press the "0" button
    When I press the "Confirma" button
    And I press the "Corrige" button
    And I press the "4" button
    And I press the "1" button
    And I press the "0" button
    And I press the "7" button
    And I press the "4" button
    And I press the "5" button
    And I press the "4" button
    And I press the "5" button
    And I press the "0" button
    And I press the "9" button
    And I press the "5" button
    Then I press the "Confirma" button