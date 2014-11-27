##Elixir
elixir built on erlang vm
compiles to BEAM bytecode
Erlang has fault-tolerant ("let it crash" error)
Pattern matching
Recursion
Immutable Data Structures
Adds more data types to erlang
All data is immutable

##Atoms
atms are just Sybmols in Ruby
`:hello_world`
`:a`
`true #booleans are also atoms`

##Tuples
Ordered collection of elements

```
#tuple
{:one, :two, :three}


elem({1, 2, 3}, 0) # => 1

```

##Lists
No array type, only linked lists
Each item in the list contains value, along with pointer

```
letters = [:a, :b, :c]

[:d | letters] #=> [:d, :a, :b, c:]
```
##String(ish) Types
No true string type
represents strings as binaries
Lists can be used to represent string data
```
"" # = utf-8 binary
'' # = char list
?a # = character code
```

##Modules
everything is stored in modules

```
def moduleping do
  #todo
end
```

##Functions
In elixir function are identified by name and arity

```
#add/2 has two clauses
def add(0, 0) do: 0
def add(x, y) do: x + y

#add/3 has one clause
def add(x, y, z) do
  x +y +z
end
```

##Pattern Matching
The equal sign isn't assignment, it's a challenge to make both sides equal

```
:a = :a #=> a
:a = :b #=> ** (MethError) match of right hand side value: :b

letter = :a #=> :a
letter #=> :a
```

matching tuples

```
{:ok, foo} = {:ok, "foo bar baz"}
foo #=> "foo bar baz"

{:ok, foo} = {:error, :crashed} #=> ** (MatchError) no match of right hand side value: {:error, crashed}
```

matching lists
```
[head|tail] = [1,2,3]
head #=> 1
tail #=>[2,3]

[first, second, third] = [1,2,3]
second #=> 2

[one, two] = [1,2,3] #=> ** (MatchError) no match of right hand side value: [1,2,3]

[first, second |rest] = [1, 2, 3]
second #=> 2
```
